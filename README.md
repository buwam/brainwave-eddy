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
2. **API Rate Limits**—OpenAI rate-limits