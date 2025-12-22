
import 'dart:io';
import 'package:assignment/utils/routes/routes_name.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../view/screenAview.dart';
import '../../view/screenBView.dart';
import '../../view/screencView.dart';

class Routes {
  static Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case RoutesName.screenA:
        return MaterialPageRoute(
            builder: (BuildContext context) =>  Screenaview());
        case RoutesName.screenB:
        return MaterialPageRoute(
            builder: (BuildContext context) =>  Screenbview());
        case RoutesName.screenC:
        return MaterialPageRoute(
            builder: (BuildContext context) =>  ScreenCView());

      default:
        return MaterialPageRoute(builder: (_) {
          return const Scaffold(
            body: Center(
              child: Text('No route defined'),
            ),
          );
        });
    }
  }
}
