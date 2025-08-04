import os
import sys
import json

def add_prefixes_to_files(master_folder):
    results = []
    
    # Handle the case where the dragged path has quotes around it (common in macOS)
    if master_folder.startswith("'") and master_folder.endswith("'"):
        master_folder = master_folder[1:-1]

    # Check if the directory exists
    if not os.path.exists(master_folder):
        return {"success": False, "error": f"The directory '{master_folder}' does not exist."}
    
    # Iterate through each subfolder in the master folder
    for root, dirs, files in os.walk(master_folder):
        for file in files:
            # Skip hidden files
            if file.startswith('.'):
                continue
                
            # Get the subfolder name
            subfolder_name = os.path.basename(root)
            
            # Skip if already has prefix
            if file.startswith(f"{subfolder_name}-"):
                continue
            
            # Construct the new file name by adding the subfolder name as a prefix
            new_file_name = f"{subfolder_name}-{file}"
            
            # Get the full file path
            old_file_path = os.path.join(root, file)
            new_file_path = os.path.join(root, new_file_name)
            
            try:
                # Rename the file
                os.rename(old_file_path, new_file_path)
                results.append({
                    "old_name": file,
                    "new_name": new_file_name,
                    "folder": subfolder_name
                })
            except Exception as e:
                return {"success": False, "error": f"Error renaming {file}: {str(e)}"}
    
    return {"success": True, "results": results, "message": "Child folder names added as a prefix to all files in child folders."}

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(json.dumps({"success": False, "error": "Usage: python prefixes.py <directory_path>"}))
        sys.exit(1)
    
    master_folder = sys.argv[1]
    result = add_prefixes_to_files(master_folder)
    print(json.dumps(result))
