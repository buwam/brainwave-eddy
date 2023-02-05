
import { useCallback, useEffect, useRef, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { Edge } from "reactflow";
import { MapNode } from "../types";
import { addSentenceChunk } from "../utils/api";

const TICK_LENGTH_MS = 2000;
const TICK_LENGTH = 100;

const useRecord = (updateGraph: MapNode["data"]["updateGraph"]) => {
  const { startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder(
    {
      audio: true,
    }
  );
  const tickTimer = useRef<NodeJS.Timeout>();
  const [blobs, setBlobs] = useState<Blob[]>([]);
  const [transcript, setTranscript] = useState("");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    console.log("transcript change", transcript);
  }, [transcript]);

  useEffect(() => {
    if (mediaBlobUrl) {