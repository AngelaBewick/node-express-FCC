const { readFile, writeFile } = require("fs").promises;

// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile); //or add .promises to the end of the fs import

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");

    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME : ${first} ${second}`
    );

    console.log(first, "complete");
    console.log(second, "complete");
  } catch (error) {
    console.log(error);
  }
};
start();
console.log("second");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
