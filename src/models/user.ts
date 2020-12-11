export class User{
    constructor(id: number, nom: string, prenom: string, email: string, password: string, username: string, phone: string, avatar: string, type: string, status: boolean){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.username = username;
        this.phone = phone;
        this.avatar = avatar;
        this.type = type;
        this.status = status;
    }
        id: number; 
        nom: string; 
        prenom: string; 
        email: string;
        password: string;
        username: string;
        phone: string;
        avatar: string;
        type: string;
        status: boolean;
}