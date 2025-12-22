import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

// Model for submitted data
class SubmittedData {
  final String phrase;
  final String hashtags;
  final DateTime submittedAt;

  SubmittedData({
    required this.phrase,
    required this.hashtags,
    DateTime? submittedAt,
  }) : submittedAt = submittedAt ?? DateTime.now();

  SubmittedData copyWith({
    String? phrase,
    String? hashtags,
    DateTime? submittedAt,
  }) {
    return SubmittedData(
      phrase: phrase ?? this.phrase,
      hashtags: hashtags ?? this.hashtags,
      submittedAt: submittedAt ?? this.submittedAt,
    );
  }

  // Extract hashtags from phrase
  List<String> extractHashtagsFromPhrase() {
    final regex = RegExp(r'(#\w+)');
    return regex
        .allMatches(phrase)
        .map((match) => match.group(0)!)
        .toList();
  }

  // Get all hashtags including manually added ones
  List<String> getAllHashtags() {
    final phraseHashtags = extractHashtagsFromPhrase();
    final manualHashtags = hashtags
        .split(',')
        .map((h) => h.trim())
        .where((h) => h.isNotEmpty && !h.startsWith('#'))
        .toList();

    return {...phraseHashtags, ...manualHashtags}.toList();
  }

  // Check if data is empty
  bool get isEmpty => phrase.isEmpty && hashtags.isEmpty;

  // Format date for display
  String get formattedDate {
    return '${submittedAt.day}/${submittedAt.month}/${submittedAt.year} ${submittedAt.hour}:${submittedAt.minute.toString().padLeft(2, '0')}';
  }
}

// State Notifier for managing submitted data
class SubmittedDataNotifier extends StateNotifier<SubmittedData> {
  SubmittedDataNotifier()
      : super(
    SubmittedData(
      phrase: '',
      hashtags: '',
    ),
  );

  // Submit new data
  void submitData(String phrase, String hashtags) {
    state = SubmittedData(
      phrase: phrase.trim(),
      hashtags: hashtags.trim(),
    );
  }

  // Clear all data
  void clearData() {
    state = SubmittedData(
      phrase: '',
      hashtags: '',
    );
  }

  // Update phrase only
  void updatePhrase(String newPhrase) {
    state = state.copyWith(phrase: newPhrase.trim());
  }

  // Update hashtags only
  void updateHashtags(String newHashtags) {
    state = state.copyWith(hashtags: newHashtags.trim());
  }

  // Extract hashtags from current phrase and update hashtags field
  void extractAndUpdateHashtags() {
    final extractedHashtags = state.extractHashtagsFromPhrase().join(', ');
    final currentManualHashtags = state.hashtags
        .split(',')
        .map((h) => h.trim())
        .where((h) => h.isNotEmpty && !h.startsWith('#'))
        .join(', ');

    String finalHashtags = '';
    if (extractedHashtags.isNotEmpty && currentManualHashtags.isNotEmpty) {
      finalHashtags = '$extractedHashtags, $currentManualHashtags';
    } else if (extractedHashtags.isNotEmpty) {
      finalHashtags = extractedHashtags;
    } else if (currentManualHashtags.isNotEmpty) {
      finalHashtags = currentManualHashtags;
    }

    state = state.copyWith(hashtags: finalHashtags);
  }
}

// Main provider for submitted data
final submittedDataProvider = StateNotifierProvider<SubmittedDataNotifier, SubmittedData>(
      (ref) => SubmittedDataNotifier(),
);

// Provider for text editing controllers
final phraseControllerProvider = Provider<TextEditingController>((ref) {
  return TextEditingController();
});

final hashtagsControllerProvider = Provider<TextEditingController>((ref) {
  return TextEditingController();
});

// Provider for form validation
final formValidationProvider = Provider.family<bool, String>((ref, phrase) {
  return phrase.trim().isNotEmpty;
});

// Provider for extracting hashtags from text
final hashtagExtractorProvider = Provider.family<List<String>, String>((ref, text) {
  final regex = RegExp(r'(#\w+)');
  return regex
      .allMatches(text)
      .map((match) => match.group(0)!)
      .toList();
});

// Provider for real-time hashtag highlighting
final highlightedTextProvider = Provider.family<InlineSpan, String>((ref, text) {
  final hashtags = ref.watch(hashtagExtractorProvider(text));

  if (hashtags.isEmpty) {
    return TextSpan(
      text: text,
      style: const TextStyle(
        color: Colors.black87,
        fontSize: 16,
      ),
    );
  }

  List<TextSpan> spans = [];
  int currentIndex = 0;

  for (final hashtag in hashtags) {
    final index = text.indexOf(hashtag, currentIndex);

    if (index != -1) {
      // Text before hashtag
      if (currentIndex < index) {
        spans.add(TextSpan(
          text: text.substring(currentIndex, index),
          style: const TextStyle(
            color: Colors.black87,
            fontSize: 16,
          ),
        ));
      }

      // Hashtag with highlighting
      spans.add(TextSpan(
        text: hashtag,
        style: const TextStyle(
          color: Colors.blue,
          fontSize: 18,
          fontWeight: FontWeight.bold,
          backgroundColor: Colors.blue,
        ),
      ));

      currentIndex = index + hashtag.length;
    }
  }

  // Remaining text
  if (currentIndex < text.length) {
    spans.add(TextSpan(
      text: text.substring(currentIndex),
      style: const TextStyle(
        color: Colors.black87,
        fontSize: 16,
      ),
    ));
  }

  return TextSpan(children: spans);
});

// Provider for auto-populating hashtags
final autoPopulateHashtagsProvider = Provider.family<String, String>((ref, phrase) {
  final hashtags = ref.watch(hashtagExtractorProvider(phrase));
  return hashtags.join(', ');
});

// Provider for combined hashtags (auto + manual)
final combinedHashtagsProvider = Provider.family<String, ({String phrase, String manualHashtags})>((ref, data) {
  final autoHashtags = ref.watch(hashtagExtractorProvider(data.phrase));
  final manualHashtags = data.manualHashtags
      .split(',')
      .map((h) => h.trim())
      .where((h) => h.isNotEmpty && !h.startsWith('#'))
      .toList();

  final allHashtags = {...autoHashtags, ...manualHashtags};
  return allHashtags.join(', ');
});

// Provider for screen state management
final screenStateProvider = StateProvider<int>((ref) => 0);

// Provider for tracking navigation
final navigationHistoryProvider = StateProvider<List<String>>((ref) => ['/']);

// Provider for managing current screen
final currentScreenProvider = StateProvider<String>((ref) => '/');

// Provider for handling form submission state
final submissionStateProvider = StateProvider<bool>((ref) => false);

// Provider for error messages
final errorMessageProvider = StateProvider<String>((ref) => '');

// Provider for success messages
final successMessageProvider = StateProvider<String>((ref) => '');

// Provider for loading states
final isLoadingProvider = StateProvider<bool>((ref) => false);

// Helper function to validate hashtag format
bool isValidHashtag(String tag) {
  final regex = RegExp(r'^#\w+$');
  return regex.hasMatch(tag);
}

// Helper function to extract hashtags from mixed text
List<String> extractUniqueHashtags(String text) {
  final regex = RegExp(r'(#\w+)');
  final matches = regex.allMatches(text);
  return matches.map((m) => m.group(0)!).toSet().toList();
}

// Helper function to format hashtags for display
String formatHashtagsForDisplay(List<String> hashtags) {
  return hashtags.join(', ');
}

// Helper function to parse hashtags from comma-separated string
List<String> parseHashtagsFromString(String hashtagString) {
  return hashtagString
      .split(',')
      .map((h) => h.trim())
      .where((h) => h.isNotEmpty)
      .toList();
}