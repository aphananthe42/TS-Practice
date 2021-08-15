/*
TypeScriptのClassについて
*/

class Human {
  /* 普通に書くとこうだが、以下のconstructorのように書けば省略できる。
  readonly name: string;
  readonly gender: string;
  private age: number;

  constructor(name: string, gender: string, age: number) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  */

  constructor(readonly name: string, readonly gender: string, protected age: number) {}
  /* プロパティのアクセス修飾子
    public: デフォルト。どこからでもアクセスできる。
    protected: 継承先からでもアクセスできる。インスタンスからはアクセスできない。
    private: 継承先からもインスタンスからもアクセスできない。
  */

  incrementAge() {
    this.age++;
  }

  greet() {
    console.log(`Hello! My name is ${ this.name }. ${ this.age } years old.`);
  }
}

// 継承
class SuperMan extends Human {
  constructor(name: string, gender: string, age: number, private skill: string) {
    super(name, gender, age);
  }

  superGreet() {
    // 継承元のHumanクラスのageプロパティが、privateではなくprotectedなのでスーパークラスでもアクセスできる。
    console.log(`My skill is ${ this.skill }. ${ this.age } years old.`);
  }
}

const human = new Human('Taro', 'Man', 44);
human.incrementAge();
human.greet();

const superMan = new SuperMan('Super', 'Woman', 60, 'power');
superMan.greet();
superMan.superGreet();
