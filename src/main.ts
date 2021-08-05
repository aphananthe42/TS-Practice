function hello(greeting: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (greeting === "hello") {
      resolve("hi");
    } else {
      reject("Say, hello!");
    }
  });
}

hello("hello")
  .then((res) => {
    console.log(`You say ${res}, right?`);
  })
  .catch((err) => {
    console.log(`${err as string} Sorry about that.`);
  });
