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

  // staticプロパティとstaticメソッド
  static species = 'Homo Sapiens';
  static isAdalt(age: number) {
    if (age > 17) return true;
    return false;
  }

  incrementAge() {
    this.age++;
  }

  greet() {
    console.log(`Hello! My name is ${ this.name }. ${ this.age } years old.`);
  }
}

// 継承
class SuperMan extends Human {
  // privateプロパティは基本的にアンダーバー付きで宣言する。
  constructor(name: string, gender: string, age: number, private _skill: string) {
    super(name, gender, age);
  }

  // クラス外からのアクセスには、getterとsetterを使用する。
  get skill(): string {
    if (!this._skill) {
      throw new Error('There is no skill.');
    }
    return this._skill;
  }

  set skill(newValue: string) {
    if (!newValue) {
      throw new Error('There is no skill.');
    }
    this._skill = newValue;
  } 

  superGreet() {
    // 継承元のHumanクラスのageプロパティが、privateではなくprotectedなのでスーパークラスでもアクセスできる。
    console.log(`My skill is ${ this.skill }. ${ this.age } years old.`);
  }
}

// シングルトンパターン
class SingleMan extends Human {
  // シングルトンクラスを作る時は、constructorにprivateを付ける。
  private constructor(name: string, gender: string, age: number, private _single: boolean) {
    super(name, gender, age);
  }

  // インスタンスを定義する。
  private static instance: SingleMan;

  // インスタンスを取得するstaticメソッドを定義する。
  // すでにインスタンスが存在していれば、static instanceを返すようにする。
  // シングルトンクラスは、クラス外でnewを使えないので、クラス定義内で一回だけインスタンスを作る。
  static getInstance() {
    if (SingleMan.instance) return SingleMan.instance;
    SingleMan.instance = new SingleMan('独身マン', 'Man', 99, true);
    return SingleMan.instance;
  }
}

const human = new Human('Taro', 'Man', 44);
human.incrementAge();
human.greet();

const superMan = new SuperMan('Super', 'Woman', 60, 'power');
superMan.greet();
superMan.superGreet();

const singleMan = SingleMan.getInstance();
console.log(singleMan);
