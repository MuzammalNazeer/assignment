import 'package:assignment/utils/routes/routes.dart';
import 'package:assignment/utils/routes/routes_name.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ProviderScope(
      child: ScreenUtilInit(
        designSize: const Size(440, 956),
        minTextAdapt: true,
        splitScreenMode: true,
        builder: (context, child) {
          return MaterialApp(
            title: 'Hashtag App',
            debugShowCheckedModeBanner: false,
            initialRoute: RoutesName.screenA,
            onGenerateRoute: Routes.generateRoute,
          );
        },
      ),
    );
  }
}