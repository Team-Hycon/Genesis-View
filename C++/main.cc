#include <iostream>
#include <fstream>
#include <iomanip>

#include "genesis.pb.h"
int i = 1;

void printHex(const std::string &string)
{
    for (auto c : string)
    {
        printf(i == 0 ? "%c" : "%02x", 0xFF & c);
    }
}

int main()
{
    auto file = std::ifstream("../genesis.dat", std::fstream::binary);
    if (file.fail())
    {
        std::cout << "Failed to open file" << std::endl;
        return 1;
    }

    Block genesis;
    if (!genesis.ParseFromIstream(&file))
    {
        std::cerr << "Failed to parse file" << std::endl;
        return 2;
    }

    auto txs = genesis.txs();
    while (i < txs.size())
    {
        auto tx = txs[i];
        std::cout << "Tx " << i << ":" << std::endl;
        std::cout << "From:\t";
        printHex(tx.from());
        std::cout << std::endl;
        std::cout << "To:\t";
        printHex(tx.to());
        std::cout << std::endl;
        std::cout << "Amount:\t" << tx.amount() << std::endl;
        std::cout << "Sign:\t";
        printHex(tx.signature());
        std::cout << std::endl;
        std::cout << "R:\t" << tx.recovery() << std::endl;
        std::cout << std::endl;
        i++;
    }
    std::cout << std::endl;

    auto header = genesis.header();
    std::cout << "Difficulty:\t" << header.difficulty() << std::endl;
    std::cout << "Timestamp:\t" << header.timestamp() << std::endl;
    std::cout << "Merkle root:\t";
    printHex(header.merkleroot());
    std::cout << std::endl;
    std::cout << "State root:\t";
    printHex(header.stateroot());
    std::cout << std::endl;
}
