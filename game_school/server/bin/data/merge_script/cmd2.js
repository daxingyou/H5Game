g=require('./gdbclient')
t=require('./util.js')
c=new g.Client()
c.connect('10.68.43.14',8016)
c.authentication('test','test')
c.select('characters')
console.log('initial finished!')
