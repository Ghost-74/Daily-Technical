#include <iostream>
using namespace std;
int main() {
    string s = "hello world";
    int length = 0;
    while (s[length] != '\0') {
        length++;
    }
    cout << "Length = " << length << endl;
    return 0;
}