/*
#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    TypeTag type;
} Node;

typedef enum TypeTag {
    ADD = 1,
    MUL = 2,
    SUB = 3,
    DIV = 4
} TypeTag;

Node *add(int a, int b) {
    return b + a;
}

Node *mul(int a, int b) {
    return b * a;
}

Node *div(int a, int b) {
    return b / a;
}

Node *sub(int a, int b) {
    return b - a;
}

Node *makeFunc(TypeTag type) {
    switch(type) {
        case ADD:
            return &add;
        case MUL:
            return &mul;
        case DIV:
            return &div;
        case SUB:
            return &sub;
        default:
            return NULL;
    }
}

void calc(Node *func) {
    printf("%d");
}

int main() {
    Node *add = (*makeFunc(ADD))(10, 6);
    Node *mul = (*makeFunc(MUL))(5, 4);
    Node *sub = (*makeFunc(SUB))(mul, add);
    Node *fibo = (*makeFunc(SUB))(sub, NULL);
    calc(add);
    calc(mul);
    calc(sub);
    calc(fibo);
}

//*Expected output:
add : 16
mul : 20
sub : -4
fibo : 2
*/