function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['js', 'html', 'css'],
        salary: 2000,
        bonus: 500,
        getSalary: function () {
            return this.salary + this.bonus;
        }
    }
    return member;
}