const Nodes = [{
  name: '1',
  children: [{
    name: '1-1',
    children: [{
      name: '1-1-1'
    }, {
      name: '1-1-2'
    }]
  }, {
    name: '1-2'
  }, {
    name: '1-3',
    children: [{
      name: '1-3-1'
    }, {
      name: '1-3-2'
    }]
  }]
}, {
  name: '2'
}, {
  name: '3',
  children: [{
    name: '3-1'
  }, {
    name: '3-2'
  }]
}];

const depthsFirst = (nodes: typeof Nodes, result: string[] = []) => {
  for(let i = 0; i < nodes.length; i++) {
    result.push(nodes[i].name as string);
    let children = nodes[i].children || [];
    depthsFirst(children as typeof Nodes, result);
  }
  return result;
};

console.log(depthsFirst(Nodes).join(','))

const depthsSecond = (nodes: typeof Nodes) => {
  let result: string[] = [];
  for(let i = 0; i < nodes.length; i++) {
    result.push(nodes[i].name as string);
    let children = nodes[i].children || [];
    result = result.concat(depthsFirst(children));
  }
  return result;
};

console.log(depthsSecond(Nodes).join(','))


const depthsThird = (nodes: typeof Nodes) => {
  let result: string[] = [];
  if (nodes) {
    let stack = nodes
    while(stack.length) {
      const item = stack.pop();
      const children = item?.children || [];
      result.push(item?.name || '');
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i])
      }
    }
  }
  return result;
};

console.log(depthsThird(Nodes).join(','), 'depthsThird')

const breadthsFirst = (nodes: typeof Nodes) => {
  let result: string[] = [];
  if (nodes) {
    let stack = nodes
    while(stack.length) {
      const item = stack.shift();
      const children = item?.children || [];
      result.push(item?.name || '');
      for (let i = 0; i < children.length; i++) {
        stack.push(children[i])
      }
    }
  }

  return result;
}

console.log(breadthsFirst(Nodes).join(','), 'breadthsFirst')
