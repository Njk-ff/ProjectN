const saveFile = async (blob, suggestedName) => {

    const supportsFileSystemAccess =
      'showSaveFilePicker' in window &&
      (() => {
        try {
          return window.self === window.top;
        } catch {
          return false;
        }
      })();
    if (supportsFileSystemAccess) {
      try {

        const handle = await showSaveFilePicker({
          suggestedName,
        });
        // Записать blob в файл.
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        return;
      } catch (err) {
  
        if (err.name !== 'AbortError') {
          console.error(err.name, err.message);
          return;
        }
      }
    }
   
    const blobURL = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = blobURL;
    a.download = suggestedName;
    a.style.display = 'none';
    document.body.append(a);
 
    a.click();
 
    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
      a.remove();
    }, 1000);
  };