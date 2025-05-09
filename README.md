#first interview question
1.What are some differences between interfaces and types in TypeScript?
Answer: Type is a system to define type for variable. To declare a type we can reuse type after declaring a type again and again. And it helps to clean code also. On the other hand interface is a same like as type but interface only use in non-primitive data like: array,object,function. Its not usable for primitive data. But type can use both type of data.

#Second interview question
7.Provide an example of using union and intersection types in TypeScript.
Answer: Here is an example of union and intersection

type user1 = {
    name:string;
    age: number
}

type user2 = {
    address: string;
    isAdmin: boolean;
}

type unionUser = user1 | user2; //this is an union type 
type intersectionUser = user1 & user2;  //this is an intersection type
