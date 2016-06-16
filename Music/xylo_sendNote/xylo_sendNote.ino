/*********************************************************
This is a library for the MPR121 12-channel Capacitive touch sensor

Designed specifically to work with the MPR121 Breakout in the Adafruit shop 
  ----> https://www.adafruit.com/products/

These sensors use I2C communicate, at least 2 pins are required 
to interface

Adafruit invests time and resources providing this open source code, 
please support Adafruit and open-source hardware by purchasing 
products from Adafruit!

Written by Limor Fried/Ladyada for Adafruit Industries.  
BSD license, all text above must be included in any redistribution
**********************************************************/
#include "pitches.h"
#include <toneAC.h>
#include <Wire.h>
#include "Adafruit_MPR121.h"
Adafruit_MPR121 cap = Adafruit_MPR121();
uint16_t lasttouched = 0;
uint16_t currtouched = 0;
int ledPin = 13;

int notes[] = { NOTE_C4, NOTE_D4, NOTE_E4, NOTE_F4, NOTE_G4, NOTE_A4, NOTE_B4, NOTE_C5 };

void setup() {     
  Serial.begin(9600);
  cap.begin(0x5A);
  pinMode(ledPin, OUTPUT); 
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
void loop() {
  updateKeys();
  if(keyPressed(0) == true) {
    sendNote(0);
  }
  else if(keyPressed(1) == true) {
    sendNote(1);
  }
  else if(keyPressed(2) == true) {
    sendNote(2);
  }
  else if(keyPressed(3) == true) {
      sendNote(3);
  }
  else if(keyPressed(4) == true) {
      sendNote(4);
  }
  else if(keyPressed(5) == true) {
      sendNote(5);
  }
  else if(keyPressed(6) == true) {
      sendNote(6);
  }
  else if(keyPressed(7) == true) {
      sendNote(7);
  }
  else if(keyPressed(8) == true) {
      sendNote(8);
  }
}
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

void sendNote(byte num) {
   Serial.write(num);
}

boolean keyPressed(int num) {
  if ((currtouched & _BV(num)) && !(lasttouched & _BV(num)) ) return true;
  return false;
}

boolean keyReleased(int num) {
   if (!(currtouched & _BV(num)) && (lasttouched & _BV(num)) ) return true;
   return false;
}

void updateKeys() {
  lasttouched = currtouched;
  currtouched = cap.touched();
}

