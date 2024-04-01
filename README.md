# Redux saga là gì

là 1 thư viện middleware trong Redux generator func

## Blocking và Non-blocking

Blocking: khi nhận Effect thì sẽ dừng lại cho đến khi chạy xong

Non Blocking: sẽ chạy ngay lập tức

## Watcher và Worker

Watcher: là 1 saga sẽ theo dõi tất cả những action đc gửi đến middleware và sẽ thông báo cho Worker thực hiện tác vụ thích ứng

Worker: là 1 Saga sẽ thực thi các hành động mà bên trong nó mỗi khi nhận đc thông báo từ Watcher

## các Effect creator thường gặp

takeEvery: chạy saga với mỗi lần Action dispath
takeLastest: chạy saga với lần action dispath cuối cung
takeLanding: chạy saga mỗi lần action dispath, nhưng lần tiếp theo sẽ bị hủy cho đến khi chạy xong
put: dùng dể thay đổi state hoặc thực hiện các tác vụ khác sau khi xử lý xong một action
call: dùng để gọi 1 func không đồng bộ (async func) gọi API hoặc thực hiện các tác vụ khác mà cần đợi kết quả trả về. (block)
all: Cho phép bạn chạy nhiều effect cùng lúc.
throttle: đảm bảo chỉ chạy saga trong 1 thời gian
take: hoạt dộng theo watcher và worker
debounce: Chờ một khoảng thời gian sau khi action được gửi trước khi thực hiện công việc.
retry: Cho phép thử lại một effect nếu nó thất bại.
fork: gọi 1 generation func, chạy độc lập
