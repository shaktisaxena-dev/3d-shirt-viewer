import { useRef, useState, useEffect } from "react"; // Import useState for tracking mouse drag state
import { useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import { easing } from "maath"; // Add this import for easing functions
import state from "./store";

/**
 * Handles the positioning and rotation of a 3D model based on the state and user input.
 * @returns A group element with a ref attribute set to the group useRef() reference.
 * The children of the CameraRig component are rendered inside this group element.
 */
const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  const [isDragging, setIsDragging] = useState(false); // Track dragging state
  const [lastMouse, setLastMouse] = useState([0, 0]); // Track last mouse position

  // Set the initial rotation of the X-axis
  useEffect(() => {
    if (group.current) {
      group.current.rotation.x = Math.PI / 2; // 90 degrees in radians
    }
  }, []);

  const onMouseDown = (event) => {
    setIsDragging(true);
    setLastMouse([event.clientX, event.clientY]);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (event) => {
    if (isDragging) {
      const deltaX = event.clientX - lastMouse[0];
      const deltaY = event.clientY - lastMouse[1];
      setLastMouse([event.clientX, event.clientY]);

      // Update the rotation of the group (shirt)
      group.current.rotation.y += deltaX * 0.005; // Adjust sensitivity as needed
      group.current.rotation.x += deltaY * 0.005; // Adjust sensitivity as needed
    }
  };

  // Bind mouse events
  useEffect(() => {
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isDragging, lastMouse]);

  // Adjust camera position smoothly based on state
  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    let targetPosition = [0, 0, 5]; // Adjusted to view the front of the shirt
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) {
        targetPosition = [0, 0, 2.5];
      } else {
        targetPosition = [0, 0, 2];
      }
    }

    easing.damp3(state.camera.position, targetPosition, 0.25, delta);
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
