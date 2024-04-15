import { motion, useDragControls } from "framer-motion";
import { useState } from "react";
import DivConnector from "react-connect-div";

export default function App() {
    const [refresh, setRefresh] = useState(false);
    const refreshNow = () => setRefresh((r) => !r);
    const controls = useDragControls();

    return (
        <main>
            <motion.div
                style={{ zIndex: 100 }}
                className="border-2  A border-indigo-800 bg-indigo-600 w-fit p-4 text-white rounded-xl shadow-lg"
                drag
                whileDrag={{ scale: 0.9 }}
                onDrag={refreshNow}
                dragControls={controls}>
                A
            </motion.div>
            <motion.div
                style={{ zIndex: 100 }}
                whileDrag={{ scale: 0.9 }}
                className="border-2  B border-indigo-800 bg-indigo-600 w-fit p-4 text-white rounded-xl shadow-lg"
                drag
                onDrag={refreshNow}
                dragControls={controls}>
                B
            </motion.div>
            <DivConnector
                zIndex={-1}
                borderWidth={2}
                borderRadius={50}
                borderColor="#818CF8"
                refreshWhen={[refresh]}
                from=".A"
                to=".B"
            />
        </main>
    );
}
