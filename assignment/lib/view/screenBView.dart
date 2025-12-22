import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../utils/routes/routes_name.dart';
import '../viewmodel/hashtag_provider.dart';


class ScreenB extends ConsumerWidget {
  const ScreenB({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return const Screenbview();
  }
}

class Screenbview extends ConsumerStatefulWidget {
  const Screenbview({super.key});

  @override
  ConsumerState<Screenbview> createState() => _ScreenbviewState();
}

class _ScreenbviewState extends ConsumerState<Screenbview> {
  @override
  Widget build(BuildContext context) {
    final submittedData = ref.watch(submittedDataProvider);

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: const Text('Screen B'),
        backgroundColor: Colors.green,
        foregroundColor: Colors.white,
        centerTitle: true,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () {
            Navigator.pushNamed(context, RoutesName.screenA);
          },
        ),
      ),
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Colors.green.shade50, Colors.white],
          ),
        ),
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Center(
                child: ElevatedButton.icon(
                  onPressed: () {
                    Navigator.pushNamed(context, RoutesName.screenC);
                  },
                  style: ElevatedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 40,
                      vertical: 16,
                    ),
                    backgroundColor: Colors.green,
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                  icon: const Icon(Icons.edit),
                  label: const Text(
                    'Go to Screen C',
                    style: TextStyle(fontSize: 18),
                  ),
                ),
              ),
              const SizedBox(height: 30),
              if (submittedData.phrase.isNotEmpty)
                Container(
                  padding: const EdgeInsets.all(20),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(15),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.grey.withOpacity(0.3),
                        blurRadius: 10,
                        offset: const Offset(0, 4),
                      ),
                    ],
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Row(
                        children: [
                          Icon(Icons.text_fields, color: Colors.green),
                          SizedBox(width: 10),
                          Text(
                            'Submitted Phrase:',
                            style: TextStyle(
                              fontSize: 22,
                              fontWeight: FontWeight.bold,
                              color: Colors.green,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 15),
                      _buildHighlightedText(submittedData.phrase, submittedData.hashtags),
                      const SizedBox(height: 30),
                      const Divider(),
                      const SizedBox(height: 20),
                      const Row(
                        children: [
                          Icon(Icons.tag, color: Colors.green),
                          SizedBox(width: 10),
                          Text(
                            'Submitted Hashtags:',
                            style: TextStyle(
                              fontSize: 22,
                              fontWeight: FontWeight.bold,
                              color: Colors.green,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 15),
                      _buildHighlightedText(submittedData.hashtags, submittedData.hashtags),
                      const SizedBox(height: 20),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.end,
                        children: [
                          Text(
                            'Submitted at: ${submittedData.submittedAt.toString().split('.')[0]}',
                            style: const TextStyle(
                              fontSize: 12,
                              color: Colors.grey,
                              fontStyle: FontStyle.italic,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              if (submittedData.phrase.isEmpty)
                Expanded(
                  child: Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        const Icon(
                          Icons.inbox,
                          size: 80,
                          color: Colors.grey,
                        ),
                        const SizedBox(height: 20),
                        const Text(
                          'No Data Submitted Yet',
                          style: TextStyle(
                            fontSize: 22,
                            fontWeight: FontWeight.bold,
                            color: Colors.grey,
                          ),
                        ),
                        const SizedBox(height: 10),
                        const Text(
                          'Go to Screen C to submit your first phrase',
                          style: TextStyle(
                            fontSize: 16,
                            color: Colors.grey,
                          ),
                          textAlign: TextAlign.center,
                        ),
                        const SizedBox(height: 30),
                        ElevatedButton.icon(
                          onPressed: () {
                            Navigator.pushNamed(context, RoutesName.screenC);
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.green,
                            foregroundColor: Colors.white,
                          ),
                          icon: const Icon(Icons.add),
                          label: const Text('Create New Submission'),
                        ),
                      ],
                    ),
                  ),
                ),
            ],
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.pushNamed(context, RoutesName.screenC);
        },
        backgroundColor: Colors.green,
        foregroundColor: Colors.white,
        child: const Icon(Icons.add),
      ),
    );
  }

  Widget _buildHighlightedText(String text, String allHashtags) {
    final hashtagList = allHashtags.split(',').where((h) => h.trim().isNotEmpty).toList();
    final regex = RegExp(r'(#\w+)');
    final matches = regex.allMatches(text);

    if (matches.isEmpty) {
      return SelectableText(
        text,
        style: const TextStyle(fontSize: 18, color: Colors.black87),
      );
    }

    List<TextSpan> spans = [];
    int currentIndex = 0;

    for (final match in matches) {
      if (currentIndex < match.start) {
        spans.add(TextSpan(
          text: text.substring(currentIndex, match.start),
          style: const TextStyle(
            fontSize: 18,
            color: Colors.black87,
            height: 1.5,
          ),
        ));
      }

      final hashtag = match.group(0)!;
      spans.add(TextSpan(
        text: hashtag,
        style: const TextStyle(
          fontSize: 20,
          color: Colors.blue,
          fontWeight: FontWeight.bold,
          height: 1.5,
          decoration: TextDecoration.underline,
          decorationColor: Colors.blue,
        ),
      ));

      currentIndex = match.end;
    }

    if (currentIndex < text.length) {
      spans.add(TextSpan(
        text: text.substring(currentIndex),
        style: const TextStyle(
          fontSize: 18,
          color: Colors.black87,
          height: 1.5,
        ),
      ));
    }

    return SelectableText.rich(
      TextSpan(children: spans),
    );
  }
}


