1;
/*

            5
           / \
          4   6
         / \   \
        2   3   7
       /         \
      1           8
                   \
                    9
*/

/*

             U
            / \
           Q   E
          / \   \
         S   Y   S
        / \       \
       E   A       T
                    \
                     I
                      \
                       O
                        \
                         N    
*/

2;
/*

            6
           / \
          4   7
         / \   \
        2   3   8
       /         \
      1           9                                     
*/

/*

             E
            / \
           Q   S
          / \   \
         S   Y   T
        / \       \
       E   A       I
                    \
                     O
                      \
                       N                                                   
*/

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this, (right = new BinarySearchTree(key, value, this));
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key == key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error("Key Error");
    }
  }

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error("Key Error");
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }
      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

/*

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

The above function recurses and sums / concatenates the values from both sides
of the tree tree. Unsure what the exit case is, may just stop running and return undefined
at the end of the tree. I believe the runtime is Big O(n) because it still has to search thru
all the branches of the tree to collect the values.

*/

function findHeight(tree) {
  let count = 0;
  if (!tree) {
    return 0;
  }
  if ((tree.left && tree.right) || tree.right || tree.left) {
    count++;
    findHeight(tree.left);
  }
}
