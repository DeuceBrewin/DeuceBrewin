// main.dart (for Flutter)
import 'package:flutter/material.dart';

void main() {
  runApp(RestroomFinderApp());
}

class RestroomFinderApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Restroom Finder'),
        ),
        body: Center(
          child: Text('Welcome to Restroom Finder!'),
        ),
      ),
    );
  }
}
