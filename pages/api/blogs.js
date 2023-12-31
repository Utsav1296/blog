// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'node:fs';

export default async function handler(req, res) {

  let data = await fs.promises.readdir("blogdata");
  // console.log(data)
  data = data.slice(0, parseInt(req.query.count))
  // console.log({ 'data twice': data })
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    // console.log(item)
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }
  res.status(200).json(allBlogs)
}