let john = {
    name: 'John',
    age: 35,
    job: 'teacher',
    presentation: (style, timeOfDay) => {
        if (style === 'formal') {
            console.log()
        } else if (style === 'friendly') {
            console.log(
                `Hey What's up ? i'm ${this.name} 
                i'm a ${this.job} and i'm ${this.age} years Old. Have a nice ${timeOfDay}`
            )
        }
    }
}

john.presentation('formal', 'Morning')