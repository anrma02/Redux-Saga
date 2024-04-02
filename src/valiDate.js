/**
 * Hàm kiểm tra và trả về thông báo lỗi nếu giá trị của một trường không hợp lệ.
 * @param {string} field Tên trường cần kiểm tra.
 * @param {string} value Giá trị của trường cần kiểm tra.
 * @returns {string} Thông báo lỗi nếu giá trị không hợp lệ, ngược lại trả về chuỗi rỗng.
 */

const valiDateField = (field, value) => {
    switch (field) {
        case 'title':
            return value.trim() ? '' : 'Vui lòng nhập tiêu đề';
        case 'price':
            return value.trim() ? (/^\d+$/.test(value) ? '' : 'Vui long nhập giá trị số') : 'Vui lòng nhập SĐT';
        case 'description':
            return value.trim() ? '' : 'Vui lòng nhập mô tả';

        default:
            return '';
    }
};

/**
 * Hàm xác thưc các trường trong form
 * @param {object} product Đối tượng cần kiểm tra.
 * @returns {object} Danh sách lỗi của các trường trong đối tượng.
 */

const valiDateForm = (product) => {
    const errors = {};
    Object.keys(product).forEach((field) => {
        const error = valiDateField(field, product[field]);
        if (error) {
            errors[field] = error;
        }
    });
    return errors;
};

export { valiDateField, valiDateForm };
