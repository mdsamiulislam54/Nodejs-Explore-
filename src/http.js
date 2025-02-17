import http from 'http';

// const server = http.createServer();

const server = http.createServer((req,res)=>{
    res.write('hello world');
    res.write('md Shamiu IsLam');
    res.end()
})
server.listen(3000);
console.log('listen 3000 port ')