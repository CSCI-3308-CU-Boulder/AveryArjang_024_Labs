#!/usr/bin/env bash
#./TestFile.sh "sample_text.txt"

echo "Enter number1: "
read number1

echo "Enter number2: "
read number2

if [ $number1 == $number2 ]
then 
	echo "both numbers are equal"
else
	echo "both numbers are inequal"
fi

#!/bin/bash

echo "Check if files with the name are currently in folder: "
ls #| egrep --color "file1.txt|file2.txt"
echo "Some text in File 1 for Sample shell script" > file1.txt
echo "\nFile1 created. See list below:"
ls #| egrep --color "file1.txt|file2.txt"
echo "\nContents of file1:"
cat file1.txt

echo "Some text in File 2 for Sample shell script" > file2.txt
echo "\nFile2 created. See list below:"
ls #| egrep --color "file1.txt|file2.txt"
echo "\nContents of file2: "
cat file2.txt



echo "\ncontents from File1 and File2 merged and stored in file2:"
cat file1.txt file2.txt | tee file2.txt

echo "contents of file1: \n"
cat file1.txt

rm file1.txt file2.txt

echo "\nFiles 1&2 deleted. See list below:"

ls #| egrep --color "file1.txt|file2.txt" 



count_lines()

count_words()

add_text()

copy_and_exit()

#!/bin/bash

clear
echo "############"
echo "only action: awk '{print}' employee.txt" 
awk '{print}' employee.txt
echo "############"
echo 'only pattern - default action is print: awk "/manager/" employee.txt' 
awk '/manager/' employee.txt
echo "############"
echo 'action & pattern: awk "/manager/ {print}" employee.txt'
awk '/manager/ {print}' employee.txt
echo "############"
echo 'printing specific fields: awk "{print $1, $4}" employee.txt'
awk '{print $1, $4}' employee.txt
echo "############"
echo 'printing row number with record: awk "{print NR, $0}" employee.txt'
awk '{print NR, $0}' employee.txt
echo "############"
echo 'printing first and last column of all records: awk "{print $1, $NF}" employee.txt'
awk '{print $1, $NF}' employee.txt
echo "############"
echo 'print specific rows: awk "NR==3, NR==6 {print NR, $0}" employee.txt'
awk 'NR==3, NR==6 {print NR, $0}' employee.txt
echo "############"
echo 'matching a field to a value: awk "$2 !~ /manager/ {print}" employee.txt'
awk '$2 !~ /manager/ {print}' employee.txt
echo "############"
echo 'matching a field to a value: awk "$2 ~ /manager/ {print}" employee.txt'
awk '$2 ~ /manager/ {print}' employee.txt
echo "############"
echo 'for loop: '
awk 'BEGIN {for (i=1;i<6;i++) print "square of ", i, " is ", i*i;}'
