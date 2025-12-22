import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../utils/routes/routes_name.dart';
import '../viewmodel/hashtag_provider.dart';

class ScreenC extends ConsumerWidget {
  const ScreenC({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return const ScreenCView();
  }
}

class ScreenCView extends ConsumerStatefulWidget {
  const ScreenCView({super.key});

  @override
  ConsumerState<ScreenCView> createState() => _ScreenCViewState();
}

class _ScreenCViewState extends ConsumerState<ScreenCView> {
  final TextEditingController _phraseController = TextEditingController();
  final TextEditingController _hashtagsController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _phraseController.addListener(_extractHashtags);
  }

  void _extractHashtags() {
    final phrase = _phraseController.text;
    final regex = RegExp(r'(#\w+)');
    final matches = regex.allMatches(phrase);
    final autoHashtags = matches.map((m) => m.group(0)!).toSet();

    final currentHashtags = _hashtagsController.text.split(',')
        .map((h) => h.trim())
        .where((h) => h.isNotEmpty)
        .toSet();

    // Keep manually added hashtags
    final manualHashtags = currentHashtags.where((h) => !h.startsWith('#')).toSet();
    final autoHashtagSet = autoHashtags.where((h) => h.startsWith('#')).toSet();

    final allHashtags = {...manualHashtags, ...autoHashtagSet};

    if (_hashtagsController.text != allHashtags.join(', ')) {
      _hashtagsController.text = allHashtags.join(', ');
    }
  }

  void _submit() {
    final phrase = _phraseController.text.trim();
    final hashtags = _hashtagsController.text.trim();

    if (phrase.isNotEmpty) {
      ref.read(submittedDataProvider.notifier).submitData(phrase, hashtags);
      // Navigate back to Screen B
      Navigator.pushNamed(context, RoutesName.screenB);
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Please enter a phrase before submitting'),
          backgroundColor: Colors.red,
        ),
      );
    }
  }

  @override
  void dispose() {
    _phraseController.dispose();
    _hashtagsController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: const Text('Screen C'),
        backgroundColor: Colors.purple,
        foregroundColor: Colors.white,
        centerTitle: true,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => Navigator.pushNamed(context, RoutesName.screenB),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Phrase:',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            TextField(
              controller: _phraseController,
              maxLines: 4,
              decoration: InputDecoration(
                hintText: 'Type your phrase with #hashtags...',
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
            ),
            const SizedBox(height: 20),
            const Text(
              'Hashtags:',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            TextField(
              controller: _hashtagsController,
              maxLines: 2,
              decoration: InputDecoration(
                hintText: 'Auto-populated hashtags. You can add more...',
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
            ),
            const SizedBox(height: 30),
            Center(
              child: ElevatedButton(
                onPressed: _submit,
                style: ElevatedButton.styleFrom(
                  padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 18),
                  backgroundColor: Colors.purple,
                ),
                child: const Text(
                  'Submit',
                  style: TextStyle(fontSize: 18, color: Colors.white),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}