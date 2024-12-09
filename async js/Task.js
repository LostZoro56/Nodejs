//tasl
// 1. write a function to download daata from a url
// 2. write a function to save that donwloaded data in a file and return the filename
// 3. write a funciton to upload the file written in previous step to a newurl

function download(url, cb) {
  console.log("starting the donwload");
}

download("url", function cb() {
  console.log("downloading completed");
  const filename = "savedData";
  saveFile(filename, function cb2() {
    console.log("file saved", filename);
    uploadFile(filename, function cb3() {
      console.log("file uploaded", filename);
    });
  });
});
