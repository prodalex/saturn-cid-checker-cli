# Saturn CID Checker CLI

## Description
This is a CLI to check if a file can be downloaded using the Saturn CDN by it's CID.

## Installation

```Typescript
npm install
```

## Usage

```bash
saturn check <CID> 

Output:
saturn check QmZSLh1CH64RVWKuq6VnforD6UkfZpb1oooY8YkEr9vtA2
CID QmZSLh1CH64RVWKuq6VnforD6UkfZpb1oooY8YkEr9vtA2 is available.
Cache Status: MISS
Saturn Node ID: 7a27a6ef-fa5f-46ad-8a09-008f21102054
IP Address of Responding Node: 138.199.27.209
```

## Potential installation issues

1. Make sure you add your node module directory to $PATH
2. Try to link your node module with `npm link saturn` in your project directory.