
import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera, OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import * as THREE from 'three';

/* import { PlayerModel } from '@/components/playermodel'
 */
const Model = () => {
    const gltf = useLoader(GLTFLoader, '/self3d.glb'); // Replace with the actual path to your GLB model file
    return <primitive object={gltf.scene} position={[0, 0, 0]} />;
};


const PlayerModel = () => {
    const gltf = useLoader(GLTFLoader, '/self3d.glb'); // Replace with the actual path to your GLB model file

    // Calculate the bounding box of the model
    const box = useMemo(() => {
        const bbox = new THREE.Box3().setFromObject(gltf.scene);
        const center = bbox.getCenter(new THREE.Vector3());
        return center;
    }, [gltf.scene]); // Include gltf.scene in the dependency array

    return <primitive object={gltf.scene} position={[-box.x, -box.y, -box.z]} />;
    // Position the model at the center of the viewport based on its bounding box
}

export default function HeroCanvas() {
    return (
        <Canvas>
            <OrthographicCamera makeDefault position={[0, 0, 15]} rotation={[0, 0, 0]} zoom={50} />
            <ambientLight intensity={1} />
            <directionalLight intensity={1} position={[0, 10, 10]} />

            <PlayerModel position={[0, 0, 15]} />
            <OrbitControls
                enableZoom={true}
                enableRotate={false}
                enablePan={false}
            />
        </Canvas>
    );
};