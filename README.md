# soldoutWebsiteApi
to install libs: npm i or yarn
<br>
api endpoint: /api/successes
<br>
response model:
<br>
{
<br>
    "success": boolean,
    <br>
    "data": { nickname: string, timestamp: number, attachment: string }[](max length 99)
    <br>
}
<br>
default port: 3000 or env.PORT variable
<br>
any other routes: code 400, response:{"success":false}
<br>
on api error: code 500, response:{
<br>
            success: false,
            <br>
            error:string
            <br>
        }
        <br>
to run server: npm run dev or yarn dev, starts with nodemon to prevent app crashes
<br>
without nodemon: npm run start or yarn start
