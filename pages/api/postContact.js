import * as fs from 'fs';

export default async function handler(req, res) {
   if (req.method === 'POST') {
      // Process a POST request
      const { gender, name, ...rest } = req.body
      let data = await fs.promises.readdir('contactData')
      fs.writeFile(`contactData/${data.length + 1}.json`, JSON.stringify(req.body), (err) => {
         if (err)
            console.log(err);
         else {
            console.log("File written successfully\n");
            // console.log("The written has the following contents:");
            // console.log(fs.readFileSync("contactData/1.json", "utf8"));
         }
      })

      res.status(200).json(rest)
   } else {
      // Handle any other HTTP method
      res.status(200).json(["hey there from contact"])
   }
}