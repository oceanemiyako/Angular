class Cat {
    public static count = 0

    id: number

    constructor(
        public firstname: string,
        public lastname: string,
        public age: number
    ) {
        this.id = ++Cat.count
    }
}

export default Cat