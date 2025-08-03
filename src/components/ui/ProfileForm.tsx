"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Schema with validation limits
const formSchema = z.object({
  productName: z
    .string()
    .min(1, "Product name is required")
    .max(50, "Product name must be under 50 characters"),
  mediaFiles: z
    .any()
    .refine((files) => files?.length >= 1, "At least one media file is required"),
  caption: z
    .string()
    .max(30, "Caption must be under 30 characters")
    .optional(),
});

type AmbassadorFormValues = z.infer<typeof formSchema>;

interface AmbassadorMediaFormProps {
  ambassador: string;
}

export function AmbassadorMediaForm({ ambassador }: AmbassadorMediaFormProps) {
  const [mediaPreview, setMediaPreview] = useState<string[]>([]);
  const [mediaTypes, setMediaTypes] = useState<string[]>([]);
  const [selectedMediaOrder, setSelectedMediaOrder] = useState<number[]>([]);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [gifVisible, setGifVisible] = useState(false);
  const [randomGif, setRandomGif] = useState<string>("");
  const [availableGifs, setAvailableGifs] = useState<string[]>([]);
  const [uploadedSubmissions, setUploadedSubmissions] = useState<
    { productName: string; uploadedFiles: string }[]
  >([]);
  const [showUploads, setShowUploads] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const form = useForm<AmbassadorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      mediaFiles: null,
      caption: "",
    },
  });

  useEffect(() => {
    async function fetchGifs() {
      try {
        const resp = await fetch("/api/get-gifs");
        if (resp.ok) {
          const data = await resp.json();
          if (data.gifs.length) setAvailableGifs(data.gifs);
        }
      } catch (e) {
        console.error("Error fetching GIFs:", e);
      }
    }
    async function fetchUploads() {
      try {
        const resp = await fetch("/api/submit");
        if (resp.ok) {
          const data = await resp.json();
          setUploadedSubmissions(data);
        }
      } catch (e) {
        console.error("Error fetching uploads:", e);
      }
    }
    fetchGifs();
    fetchUploads();
  }, []);

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const arr = Array.from(files);
    Promise.all(
      arr.map(
        (file) =>
          new Promise<{ src: string; type: string }>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve({ src: reader.result as string, type: file.type });
            reader.onerror = () => reject(new Error("File read error"));
            reader.readAsDataURL(file);
          })
      )
    )
      .then((results) => {
        setMediaPreview(results.map((r) => r.src));
        setMediaTypes(results.map((r) => r.type));
        setSelectedMediaOrder([]);
      })
      .catch((err) => console.error(err));
  };

  const toggleMediaSelection = (idx: number) => {
    setSelectedMediaOrder((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const toggleExpansion = (key: string) => {
    setExpandedItems((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const onSubmit = async (values: AmbassadorFormValues) => {
    if (!selectedMediaOrder.length) {
      alert("Please select at least one featured media.");
      return;
    }

    setUploadStatus("Uploading...");
    const formData = new FormData();

    // Sanitize fields for consistency with backend
    const ambassadorRaw = localStorage.getItem("loggedInUser") || ambassador;
    const safeAmbassador = ambassadorRaw.toLowerCase().replace(/\s+/g, "-").substring(0, 50);
    const safeProductName = values.productName.toLowerCase().replace(/\s+/g, "-").substring(0, 50);
    const safeCaption = values.caption
      ? values.caption
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-_]/g, "")
          .substring(0, 30)
      : "";

    formData.append("loggedInAmbassador", safeAmbassador);
    formData.append("productName", safeProductName);
    formData.append("mediaOrder", JSON.stringify(selectedMediaOrder));
    if (safeCaption) formData.append("caption", safeCaption);

    if (values.mediaFiles && values.mediaFiles.length) {
      Array.from(values.mediaFiles as FileList).forEach((file) => {
        formData.append("mediaFiles", file);
      });
    }

    try {
      const resp = await fetch("/api/submit", { method: "POST", body: formData });
      if (resp.ok) {
        if (availableGifs.length) {
          const i = Math.floor(Math.random() * availableGifs.length);
          setRandomGif(`/gifs/${availableGifs[i]}`);
        }
        setGifVisible(true);
        setUploadStatus("Upload successful!");
        setTimeout(() => {
          setGifVisible(false);
          setUploadStatus(null);
        }, 15000);
        form.reset({ productName: "", mediaFiles: null, caption: "" });
        setMediaPreview([]);
        setMediaTypes([]);
        setSelectedMediaOrder([]);
        const fresh = await fetch("/api/submit");
        if (fresh.ok) setUploadedSubmissions(await fresh.json());
      } else {
        setUploadStatus("Upload failed.");
      }
    } catch (e) {
      setUploadStatus("Upload failed.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800">
        Upload Media - Client: {ambassador}
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <FormField
            control={form.control}
            name="productName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter product name" className="w-full" />
                </FormControl>
                <FormDescription>
                  Max 50 characters. 
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="caption"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Caption (optional)</FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    placeholder="Add a caption"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  />
                </FormControl>
                <FormDescription>
                  Optional. Max 30 characters.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mediaFiles"
            render={({ field: { onChange, value, ...rest } }) => (
              <FormItem>
                <FormLabel>Upload Photos/Videos - Please upload a few at a times, videos and photos separately. Videos can take a bit longer. Thank you for your patience!</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*,video/*"
                    multiple
                    onChange={(e) => {
                      const files = e.target.files;
                      if (files) {
                        onChange(files);
                        handleMediaChange(e);
                      }
                    }}
                    {...rest}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {mediaPreview.map((src, idx) => (
                    <div key={idx} className="relative">
                      {mediaTypes[idx].startsWith("video") ? (
                        <video
                          src={src}
                          controls
                          onClick={() => toggleMediaSelection(idx)}
                          className={`w-20 h-20 object-cover rounded-lg shadow-md cursor-pointer ${
                            selectedMediaOrder.includes(idx) ? "ring-4 ring-blue-500" : ""
                          }`}
                        />
                      ) : (
                        <Image
                          src={src}
                          alt={`Preview ${idx + 1}`}
                          onClick={() => toggleMediaSelection(idx)}
                          className={`w-20 h-20 object-cover rounded-lg shadow-md cursor-pointer ${
                            selectedMediaOrder.includes(idx) ? "ring-4 ring-blue-500" : ""
                          }`}
                          width={80}
                          height={80}
                        />
                      )}
                      {selectedMediaOrder.includes(idx) && (
                        <span className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                          {selectedMediaOrder.indexOf(idx) + 1}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </FormItem>
            )}
          />

          {(gifVisible || uploadStatus) && (
            <div className="flex flex-col items-center space-y-2">
              {gifVisible && <Image src={randomGif} alt="Success" className="max-w-xs h-auto rounded" width={300} height={200} />}
              {uploadStatus && <p className="text-sm font-medium text-gray-600">{uploadStatus}</p>}
            </div>
          )}

          <Button type="submit" className="w-full py-3 text-white bg-black rounded-lg hover:bg-blue-700 transition">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
