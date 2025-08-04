import os
import sys
import json

def rename_files_sequential(base_dir):
    results = []
    
    # Handle the case where the dragged path has quotes around it (common in macOS)
    if base_dir.startswith("'") and base_dir.endswith("'"):
        base_dir = base_dir[1:-1]

    # Check if the directory exists
    if not os.path.exists(base_dir):
        return {"success": False, "error": f"The directory '{base_dir}' does not exist."}
    
    # Traverse the directory and process each file
    for root, dirs, files in os.walk(base_dir):
        count = 1
        # Sort files to ensure consistent ordering
        files.sort()
        
        for file in files:
            file_path = os.path.join(root, file)

            # Skip if it's a hidden file or not a regular file
            if file.startswith('.') or not os.path.isfile(file_path):
                continue

            # Get the file extension
            file_extension = os.path.splitext(file)[1]
            # Create new file name with the count as prefix
            new_file_name = f"{count}{file_extension}"
            new_file_path = os.path.join(root, new_file_name)

            # Skip if file already has the correct name
            if file == new_file_name:
                count += 1
                continue

            try:
                # Rename the file
                os.rename(file_path, new_file_path)
                results.append({
                    "old_name": file,
                    "new_name": new_file_name,
                    "folder": os.path.basename(root)
                })
                count += 1
            except Exception as e:
                return {"success": False, "error": f"Error renaming {file}: {str(e)}"}

    return {"success": True, "results": results, "message": "Files renamed with sequential numbers."}

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(json.dumps({"success": False, "error": "Usage: python rename.py <directory_path>"}))
        sys.exit(1)
    
    base_dir = sys.argv[1]
    result = rename_files_sequential(base_dir)
    print(json.dumps(result))
