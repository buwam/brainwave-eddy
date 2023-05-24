## Inspiration 
Imagine you're sitting in a cozy cafe and a revolutionary startup idea materializes in your mind. You promptly reach for your laptop, opting from a plethora of productivity tools to capture your idea. Eager not to let the idea slip away, you rapidly type, mulling over your new idea and its related aspects. Breathe in the satisfaction after an intense ideation session, but alas, now begins the challenging part of sifting through your work, extracting key concepts and arranging them.

_**Eddy, your brainstorming buddy, automates this ideation process. Just sit, talk, and watch Eddy assort your ideas for you.**_

## What Have We Learned?
Merging speech recognition with natural language processing tools forced us to learn live audio transcription, sentence determination from a text corpus, and sentence similarity calculation. Leveraging intricate and innovative technology, each member of the team took a comprehensive approach and acquired new skills across the stack.

## Features
1. **Live Mindmap**—Just talk and let Eddy structure your flow of thoughts. With the help of semantic search, Eddy categorizes your ideas into comprehensible groups, helping you sift through the clutter.
2. **Summary Generation**—Ideal for real-time note-taking, our summary feature transforms the graph into a Markdown-inspired format.

![The Eddy TechStack](https://i.imgur.com/FfsypZt.png)

## Challenges
1. **Live Speech Chunking** - To distil coherent ideas from a user’s speech while processing the audio live, we had to create a paradigm that parses overlapping speech intervals, forms a disjoint union of the sentences, and then dispatches these two distinct groups to our NLP model for similarity comparison. 
2. **API Rate Limits**—OpenAI rate-limits compelled us to devise a more efficient processing mechanism for the audio and fewer round trip requests for keyword extraction and embeddings.
3. **Filler Sentences**—Not every sentence carries a concrete and distinct idea; some sentences result in a dead-end. Such sentences can visually clutter the graph.
4. **Visualization**—Force graph, a key feature of React Flow, had to be approximated as much as possible. We incorporated some randomness in placements; however, creating a better node placement system could further enhance the clarity and aesthetic appeal of the graph.

## Dream Development
**AI Inspiration Enhancement**—With generative AI, we could easily extend features such as generating images for coherent ideas, or business plans. 
**Live Notes**—Eddy can be beneficial in transcribing and organizing meeting and lecture notes. With enhancements to our summary feature, Eddy could potentially generate detailed notes from a live recording of a meeting.

## Tools Used
**User Interface:** React, Chakra UI, React Flow, Figma
**AI Engine:** HuggingFace, OpenAI Whisper, OpenAI GPT-3, OpenAI Embeddings, NLTK
**API:** FastAPI

# Extra Elements

## Mindmap Algorithm
![Mindmap Algorithm](https://i.imgur.com/QtqeBjG.png)