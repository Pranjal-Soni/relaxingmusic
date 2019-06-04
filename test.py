#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Feb 25 23:05:11 2019

@author: pranjal
"""
#print the value who have highest value 
#item()
#keys()
#values()


def addpoly(p1,p2):
    for i in range(0,len(p1)):
        for j in range(0,len(p1[0])):
            print(p1[i][j])
            

k = addpoly([(4,3),(3,0)],[(-4,3),(2,1)])
print(k)