/**
 * Xử lý thêm một công việc mới vào danh sách công việc.
 *
 * @param {function} dispatch - Hàm dispatch của Redux để gửi action đến store.
 * @param {function} addTodo - Hàm action creator để thêm một công việc mới vào danh sách.
 * @param {function} setText - Hàm để cập nhật nội dung của input text.
 * @param {string} text - Nội dung của công việc mới.
 */

export const handleAddTodo = (dispatch, addTodo, text) => {
    if (!text.trim()) return;
    dispatch(
        addTodo({
            id: Math.floor(Math.random() * 1000),
            text: text,
            completed: false,
        }),
    );
};

/**
 * Xử lý sự kiện khi người dùng nhấn nút "Delete" để xóa một công việc.
 *
 * @param {function} dispatch - Hàm dispatch của Redux để gửi action đến store.
 * @param {string} id - ID của công việc cần xóa.
 */
export const handleDeleteTodo = (dispatch, id, deleteTodo) => {
    // Dispatch một action để xóa công việc với ID được cung cấp.
    dispatch(deleteTodo(id));
};
