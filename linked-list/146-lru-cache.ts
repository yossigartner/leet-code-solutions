function removeNode(list: { firstNode: any; lastNode: any; size: number; }, node: { prev: { next: any; } | null; next: { prev: any; } | null; }) {
    if(node.prev == null)
        list.firstNode = node.next;
    else
        node.prev.next = node.next;
    if(node.next == null)
        list.lastNode = node.prev;
    else
        node.next.prev = node.prev;
    
    list.size--;
}

function insertEnd(list: { lastNode: { next: any; } | null; firstNode: any; size: number; }, newNode: { next: any; prev: any; value?: any; key?: any; }) {
    if(list.lastNode == null) {
        list.lastNode = newNode;
        list.firstNode = newNode;
    } else {
        newNode.next = null;
        newNode.prev = list.lastNode;
        list.lastNode.next = newNode;
        list.lastNode = newNode;
    }
    
    list.size++;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(this: any, capacity: any) {
    this.list = {
        firstNode:null,
        lastNode:null,
        size:0
    }
    this.maximumCapacity = capacity;
    this.lruMap = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key: string | number) {
    const node = this.lruMap[key];
    if(!node) return -1;
    removeNode(this.list,node);
    insertEnd(this.list,node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key: string | number, value: any) {
    if(this.lruMap[key]) {
        const node = this.lruMap[key];
        node.value = value;
        removeNode(this.list,node);
        insertEnd(this.list,node);
    } else {
        const newNode = {
            next:null,
            prev:null,
            value:value,
            key:key
        }
        if(this.list.size === this.maximumCapacity) {
            const firstNode = this.list.firstNode;
            removeNode(this.list,firstNode);
            delete this.lruMap[firstNode.key];
        }
        insertEnd(this.list,newNode);
        this.lruMap[key] = newNode;
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */