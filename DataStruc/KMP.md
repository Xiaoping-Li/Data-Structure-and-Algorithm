https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/
# KMP Algorithm
什么是KMP算法: KMP是三位大牛：D.E.Knuth、J.H.Morris和V.R.Pratt同时发现的。要解决的问题就是在字符串（也叫主串）中的模式（pattern）定位问题。说简单点就是关键字搜索。模式串就是关键字（接下来称它为P），如果它在一个主串（接下来称为T）中出现，就返回它的具体位置，否则返回-1（常用手段）。

## Preprocessing Overview:

* KMP algorithm preprocesses pat[] and constructs an auxiliary **lps[]** of size m (same as size of pattern) which is used to skip characters while matching.
* **name lps indicates longest proper prefix which is also suffix.** A _proper prefix_ is prefix with whole string **not** allowed. For example, prefixes of “ABC” are “”, “A”, “AB” and “ABC”. Proper prefixes are “”, “A” and “AB”. Suffixes of the string are “”, “C”, “BC” and “ABC”.
* We search for lps in sub-patterns. More clearly we focus on sub-strings of patterns that are either prefix and suffix.
* For each sub-pattern pat[0..i] where i = 0 to m-1, lps[i] stores length of the maximum matching proper prefix which is also a suffix of the sub-pattern pat[0..i].
```
   lps[i] = the longest proper prefix of pat[0..i] 
              which is also a suffix of pat[0..i]. 
```

**Note** : lps[i] could also be defined as longest prefix which is also proper suffix. We need to use properly at one place to make sure that the whole substring is not considered.
```
Examples of lps[] construction:
For the pattern “AAAA”, 
lps[] is [0, 1, 2, 3]

For the pattern “ABCDE”, 
lps[] is [0, 0, 0, 0, 0]

For the pattern “AABAACAABAA”, 
lps[] is [0, 1, 0, 1, 2, 0, 1, 2, 3, 4, 5]

For the pattern “AAACAAAAAC”, 
lps[] is [0, 1, 2, 0, 1, 2, 3, 3, 3, 4] 

For the pattern “AAABAAA”, 
lps[] is [0, 1, 2, 0, 1, 2, 3]
```

## Searching Algorithm:
Unlike Naive algorithm, where we slide the pattern by one and compare all characters at each shift, we use a value from `lps[] `to decide the _next_ characters to be matched. The idea is to not match a character that we know will anyway match.

How to use `lps[]` to decide next positions (or to know a number of characters to be skipped)?

* We start comparison of `pat[j]` with `j = 0` with characters of current window of text.
* We keep matching characters `txt[i]` and `pat[j]` and keep incrementing `i` and `j` while `pat[j]` and `txt[i]` keep **matching**.
* When we see a **mismatch**
   * We know that characters `pat[0..j-1]` match with `txt[i-j…i-1]` (Note that j starts with 0 and increment it only when there is a match).
   * We also know (from above definition) that `lps[j-1]` is count of characters of `pat[0…j-1]` that are both proper prefix and suffix.
   * From above two points, we can conclude that we do not need to match these `lps[j-1]` characters with `txt[i-j…i-1]` because we know that these characters will anyway match. Let us consider above example to understand this.
```
txt[] = "AAAAABAAABA" 
pat[] = "AAAA"
lps[] = {0, 1, 2, 3} 

i = 0, j = 0
txt[] = "AAAAABAAABA" 
pat[] = "AAAA"
txt[i] and pat[j] match, do i++, j++

i = 1, j = 1
txt[] = "AAAAABAAABA" 
pat[] = "AAAA"
txt[i] and pat[j] match, do i++, j++

i = 2, j = 2
txt[] = "AAAAABAAABA" 
pat[] = "AAAA"
pat[i] and pat[j] match, do i++, j++

i = 3, j = 3
txt[] = "AAAAABAAABA" 
pat[] = "AAAA"
txt[i] and pat[j] match, do i++, j++

i = 4, j = 4
Since j == M, print pattern found and reset j,
j = lps[j-1] = lps[3] = 3

Here unlike Naive algorithm, we do not match first three 
characters of this window. Value of lps[j-1] (in above 
step) gave us index of next character to match.
i = 4, j = 3
txt[] = "AAAAABAAABA" 
pat[] =  "AAAA"
txt[i] and pat[j] match, do i++, j++

i = 5, j = 4
Since j == M, print pattern found and reset j,
j = lps[j-1] = lps[3] = 3

Again unlike Naive algorithm, we do not match first three 
characters of this window. Value of lps[j-1] (in above 
step) gave us index of next character to match.
i = 5, j = 3
txt[] = "AAAAABAAABA" 
pat[] =   "AAAA"
txt[i] and pat[j] do NOT match and j > 0, change only j
j = lps[j-1] = lps[2] = 2

i = 5, j = 2
txt[] = "AAAAABAAABA" 
pat[] =    "AAAA"
txt[i] and pat[j] do NOT match and j > 0, change only j
j = lps[j-1] = lps[1] = 1 

i = 5, j = 1
txt[] = "AAAAABAAABA" 
pat[] =     "AAAA"
txt[i] and pat[j] do NOT match and j > 0, change only j
j = lps[j-1] = lps[0] = 0

i = 5, j = 0
txt[] = "AAAAABAAABA" 
pat[] =      "AAAA"
txt[i] and pat[j] do NOT match and j is 0, we do i++.

i = 6, j = 0
txt[] = "AAAAABAAABA" 
pat[] =       "AAAA"
txt[i] and pat[j] match, do i++ and j++

i = 7, j = 1
txt[] = "AAAAABAAABA" 
pat[] =       "AAAA"
txt[i] and pat[j] match, do i++ and j++

We continue this way...
```




