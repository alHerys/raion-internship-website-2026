# Pemrograman Berorientasi Objek (OOP)

## Class & Constructor Dasar

Syntax utama `class` sangat mirip dengan Java atau C++.

**Bandingkan Constructor Java**
```java
class User {
    String name;
    int age;
    
    // Constructor 
    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

**Dengan Dart Constructor:**
```dart
class User {
  String name;
  int age;
  
  // Ini Constructor yg sama dengan di java
  User(this.name, this.age); 
}
```

## Named Constructor (Konstruktor Dinamai)

Seringkali dalam java orang ingin membuat Constructor berbeda tipe berdasar propertinya (Constructor Overloading). Dart menyelesaikan tantangan tersebut dengan **Named Constructors**.

```dart
class User {
  String name;
  int age;
  
  // Konstruktor Biasa (Default)
  User(this.name, this.age); 
  
  // Named Constructor unik buatan kita!
  User.isStudent() {
    name = "Siswa Magang";
    age = 18;
  }
}

// Cara pakainya:
var userBiasa = User("Agung", 20);
var userSiswa = User.isStudent(); // Memanggil Named Constructor
```

## Pewarisan, Keyword `super` dan Polymorphism

- Kita dapat memakai keyword **`extends`** (pewarisan standar Java).
- Kita bisa membuat **`abstract`** class beserta polymorphism *Method Overriding* **`@override`**.

```dart
class Hewan {
  void bernapas() => print("Hewan Bernapas");
}

// Pewarisan
class Kucing extends Hewan {
  @override
  void bernapas() {
    super.bernapas(); // Dapat memanggil method ancestor
    print("Ngeong.. mengeong manja.");
  }
}
```

## Coba Sendiri: Interaktif DartPad

Daripada sekadar membaca teori OOP di atas, mari tes class Constructor otomatisnya langsung! Ubah argumen default pembuatan Objek Mobil dan cetak fungsinya:

<iframe src="https://dartpad.dev/embed-dart.html?theme=dark&run=true&split=false&id=3b4c96c289fb579b5a9b2979991ce9c8" style="width:100%; height:400px; border:0; border-radius: 8px;"></iframe>