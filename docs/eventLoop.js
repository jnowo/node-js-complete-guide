/*
- is run and started by node.js
- handle all the callbacks
- 1st at the beginning it check if there are any timers callback
- 2nd step it check other callbacks ex. write file, when ti finish it will execute callback
- when we have long time callback, node.js will return to them in another iteration
- 3rd it will go to 'pool' phase. Check any new I/O events and do it best to execute their callbacks immediately if possible
  if it is not possible it will defer the execution and register it as 'pending' callback
- 4th check phase
- 5th close callback phase - execute all 'close' event callbacks
- next we might exit if there is no remaining work to do. internally node.js will keep track of all the open listeners
 */