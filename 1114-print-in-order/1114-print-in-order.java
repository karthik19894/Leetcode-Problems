class Foo {
    
    private volatile String lastJobRun = null;

    public Foo() {
        
    }

    public void first(Runnable printFirst) throws InterruptedException {
        
        // printFirst.run() outputs "first". Do not change or remove this line.
        printFirst.run();
        lastJobRun = "first";
    }

    public void second(Runnable printSecond) throws InterruptedException {
        while(lastJobRun != "first"){}
        // printSecond.run() outputs "second". Do not change or remove this line.
        printSecond.run();
        lastJobRun = "second";
    }

    public void third(Runnable printThird) throws InterruptedException {
        while(lastJobRun != "second"){}
        // printThird.run() outputs "third". Do not change or remove this line.
        printThird.run();
    }
}