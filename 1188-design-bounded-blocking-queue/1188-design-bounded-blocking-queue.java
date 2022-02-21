class BoundedBlockingQueue {

    private int size;
    
    private int capacity;
    
    private Queue<Integer> queue;
    
    
    public BoundedBlockingQueue(int capacity) {
        this.capacity = capacity;
        this.queue = new LinkedList<>();
    }
    
    public synchronized void enqueue(int element) throws InterruptedException {
        while(this.size == this.capacity) wait();
        this.queue.add(element);
        this.size++;
        if(this.size > 0 && this.size != this.capacity) notify();
    }
    
    public synchronized int dequeue() throws InterruptedException {
        while(this.size == 0) wait();
        int element = this.queue.poll();
        this.size--;
        if(this.size < this.capacity) notify();
        return element;
        
    }
    
    public int size() {
        return this.size;
    }
}