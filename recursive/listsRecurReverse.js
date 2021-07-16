//NOT DONEEE!!!!!

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

let list = [3, 1];
//output=> "5 -> 3 -> 1 -> null"
const reverse = (head) => {
  let node = head;
  let previous;
  let tmp;
  while (node) {
    // save next before we overwrite node.next!
    tmp = Node.next;
    console.log(tmp);
    //reverse the pointer
    node.next = previous;
    //step forward in the list
    previous = node;
    node = tmp;
  }
  return previous;
  // let str = "";
  // for (let i = head.length - 1; i >= 0; i--) {
  //   str += `${head[i]} -> `;
  // }
  // return `${str.slice(0, -4)} -> null`;
};

console.log(reverse(list));
