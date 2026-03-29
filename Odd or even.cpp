#include <iostream>
using namespace std;
int main() {
    int arr[] = {3, 7, 2, 9, 5, 4, 6};
    int n = 7;
    int evenCount = 0, oddCount = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    cout << "Even count = " << evenCount << endl;
    cout << "Odd count  = " << oddCount  << endl;
    return 0;
}