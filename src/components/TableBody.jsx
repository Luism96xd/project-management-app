import '@/styles/Tables.module.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const TableBody = ({ tableData, columns }) => {

    const handleDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const items = [...data];
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setData(items);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="table">
                {(provided) => (
                    <tbody {...provided.droppableProps} ref={provided.innerRef}>
                        {tableData.map((data, index) => {
                            return (
                                <Draggable key={data.id} draggableId={data.id} index={index}>
                                    {(provided) => (
                                        <tr key={data.id}
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            {columns.map(({ accessor }) => {
                                                const tData = data[accessor] ? data[accessor] : "——";
                                                return <td key={accessor}>{tData}</td>;
                                            })}
                                        </tr>
                                    )}
                                </Draggable>
                            )
                        })}
                        {provided.placeholder}
                    </tbody>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TableBody;