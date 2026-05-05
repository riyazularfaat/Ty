class Counter { 
    static count: number = 0;

    increment() { 
        return Counter.count = Counter.count + 1;
    }
    decrement() { 
        return Counter.count = Counter.count - 1;
    }
}

const count1 = new Counter()
const count2 = new Counter()

console.log(count1.increment() )
console.log(count1.increment() )
console.log(count1.increment() )
console.log(count1.increment() )
console.log(count1.increment() )
console.log(count1.increment() )
console.log(count2.increment() )
console.log(count2.increment() )
console.log(count2.increment() )
console.log(count2.increment() )
console.log(count2.increment() )
console.log(count2.increment())

// static method => by making methods static, we can accese the methods without an object of the class

class Counter1 { 
    static count: number = 0;

    static increment() { 
        return Counter1.count = Counter1.count + 1;
    }
    static decrement() { 
        return Counter1.count = Counter1.count - 1;
    }
}

console.log(Counter1.increment())
console.log(Counter1.increment())
console.log(Counter1.increment())
console.log(Counter1.increment())
console.log(Counter1.increment())
console.log(Counter1.increment())