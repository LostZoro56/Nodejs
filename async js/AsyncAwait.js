function download(url) {
  return new Promise(function exec(resolve, reject) {
    console.log("started downloading data from", url);
    setTimeout(function () {
      let data = "some data from" + url;
      console.log(("donwloaded data from", url));
      resolve(data);
    }, 3000);
  });
}

function writefile(data, filename) {
  return new Promise(function exec(resolve, reject) {
    console.log("writing", data, "to file");
    setTimeout(() => {
      console.log("writing to file", filename, "id done");
      let status = "success";
      resolve(status);
    }, 2000);
  });
}

function upload(filename, url) {
  return new Promise(function exec(resolve, reject) {
    console.log("uploading file ", filename, "to ", url);
    setTimeout(() => {
      console.log("upload done");
      let uploadStatus = "success";
      reject(uploadStatus);
    }, 3000);
  });
}

async function exec() {
  const downloadData = await download("https://www.example.com");
  console.log("data downloaded is ", downloadData);

  const fileResponse = await writefile(downloadData, "exmple.txt");
  console.log("file write status", fileResponse);

  const uploadStatus = await upload("exmple.txt", "https://www.example.com");
}

const it = exec(); // returns gen object having iterator
